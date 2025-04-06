import React, { Children } from "react";
/* libs */
import Select, { components } from "react-select";
/* bootstrap */
import BootstrapTable from 'react-bootstrap-table-next';
import { Modal } from 'react-bootstrap';
/* components */
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";

/**
 * @param props object{}
 * @returns Component</>
 * @example
 * import FormMultiSelect from "@/components/forms/FormMultiSelect";
 * <FormMultiSelect
 *    label="Example"
 *    id="example"
 *    name="example"
 *    value={["1"]} // type array
 *    onChange={() => {}}
 *    options={[
 *      {id: "1", title: "Example 1"},
 *      {id: "2", title: "Example 2"},
 *    ]}
 *    getOptionValue={(e) => e.id}
 *    getOptionLabel={(e) => e.title}
 *    maxShowMultiValue={2}
 * />
 * @website https://react-select.com/home
 */
function FormMultiSelect(props) {

  /* initial */
  let initialProps = {
    className: "react-select-custom text-layout" /* form-select form-select-sm */,
    placeholder: "- กรุณาเลือก -",
  };

  let {
    label,
    labelClassName,
    required,
    className = "",
    id = "",
    name = "",
    options = [],
    value = "",
    getValue = { name: "", value: [] },
    onChange = () => { },
    isValid = false,
    validMessage = "",
    validClassName = "",
    placeholder = "",
    isDisabled = false,
    maxShowMultiValue = 2,
    hideSelectedOptions = false,
    isSearchable = true,
    isSelectModal = true,
    menuPosition = "fixed",
    ...others
  } = props;

  /* state */
  const [showModal, setShowModal] = React.useState(false);

  /* functions */
  const handleGetValue = () => {
    let result = [];
    if (options?.length > 0) {
      let valueName = handleGetOptionValueName();
      let valueArr = props?.getValue !== undefined ? props?.getValue?.value : value;
      if (Array.isArray(valueArr) && valueArr?.length > 0) {
        result = options?.filter((v) => valueArr?.filter(
          (o) => o[valueName]?.toString() === v[valueName]?.toString() || o?.toString() === v[valueName]?.toString()).length > 0
        );
      }
    }
    return result;
  };

  const handleGetDisabled = () => {
    let disable = isDisabled;
    if (props.disabled !== undefined) {
      disable = props.disabled;
    }
    return disable;
  };

  const handleGetPlaceholder = () => {
    let result = "";
    if (props.placeholder !== undefined) {
      result = props.placeholder;
    }
    else {
      result = initialProps.placeholder;
    }
    return result;
  };

  const handleGetOptionValueName = () => {
    let result = '';
    if (props.getOptionValue !== undefined) {
      result = props.getOptionValue.toString().replace(/[ {}\n;]/g, "").split('e.')[1];
    }
    else {
      result = 'value';
    }
    return result;
  }

  const handleGetOptionLabelName = () => {
    let result = '';
    if (props.getOptionLabel !== undefined) {
      result = props.getOptionLabel.toString().replace(/[ {}\n;]/g, "").split('e.')[1];
    }
    else {
      result = 'label';
    }
    return result;
  }

  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <Select
      isMulti={true}
      className={`${initialProps.className} ${className}`}
      name={name}
      value={handleGetValue()}
      onChange={(e) => {
        if (e !== null) {
          let valueName = handleGetOptionValueName();
          onChange({
            target: {
              name: name,
              value: e.map(m => m[valueName]),
              option: e || []
            },
          });
        }
        else {
          onChange({
            target: {
              name: name,
              value: [],
              option: e || []
            },
          });
        }
      }}
      options={options}
      components={{
        IndicatorSeparator: () => null,
        MultiValueLabel,
        ValueContainer,
      }}
      isDisabled={handleGetDisabled()}
      placeholder={handleGetPlaceholder()}
      menuPosition={menuPosition}
      maxShowMultiValue={maxShowMultiValue}
      hideSelectedOptions={hideSelectedOptions}
      isSearchable={isSearchable}
      setShowModal={setShowModal}
      isSelectModal={isSelectModal}
      {...others}
    />
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
    {isSelectModal === true && (
      <FormMultiSelectModal
        show={showModal}
        hide={() => setShowModal(false)}
        valueName={handleGetOptionValueName()}
        labelName={handleGetOptionLabelName()}
        {...props}
      />
    )}
  </>);
}

const ValueContainer = ({ children, getValue, ...props }) => {
  let maxToShow = props.selectProps.maxShowMultiValue;
  let [values, input] = children;
  var length = getValue().length;
  let displayChips = Children.toArray(children).slice(0, maxToShow);
  // let shouldBadgeShow = length > maxToShow;
  // let displayLength = length - maxToShow;
  return (
    <>
      <components.ValueContainer {...props}>
        {length > 0 && displayChips}
        {length === 0 && values}
        {length === 0 && input}
        {length >= maxToShow && input}
        {/* <div className="root text-small opacity-75" >{shouldBadgeShow && `+${displayLength} รายการ`}</div> */}
        {length > 0 && <div className="root text-small opacity-75" >{length} รายการ</div>}
      </components.ValueContainer>
      {props.selectProps?.isSelectModal === true && props.selectProps?.isDisabled === false && (
        <a
          className="btn-text-gray"
          onClick={() => {
            props.selectProps?.onMenuClose(true)
            props.selectProps?.setShowModal(true)
          }}
        >
          <i className="fa-regular fa-square-check text-layout"></i>
        </a>
      )}
    </>
  );
};

const MultiValueLabel = (props) => {
  return (
    <div title={props?.children || ''}>
      <components.MultiValueLabel {...props} />
    </div>
  );
};

function FormMultiSelectModal(props) {

  /* props */
  let show = props.show;
  let hide = props.hide;
  let id = props.id;
  let data = props?.options;
  let valueName = props.valueName;
  let labelName = props.labelName;

  /* state */
  const [dataAction, setDataAction] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [valueSearch, setValueSearch] = React.useState("");
  const [showSelected, setShowSelected] = React.useState([]);

  const columns = [
    {
      dataField: valueName,
      text: '',
      hidden: true,
    },
    {
      dataField: labelName,
      text: props.label ? props.label : 'รายการ',
      headerStyle: { width: 'auto' },
      align: "left",
      classes: "cursor-pointer px-2",
    },
  ];

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    onSelect: (row, isSelect) => handleSelect(row, isSelect),
    onSelectAll: (isSelect) => handleSelectAll(isSelect),
    selected: selected,
    // nonSelectable: dataAction?.filter((v) => v.isDisabled)?.map((v) => v[valueName]),
    headerColumnStyle: { width: "50px" },
    selectColumnStyle: { textAlign: "center" },
    style: { backgroundColor: "lavender" },
  };

  /* useEffect */
  React.useEffect(() => {
    setValueSearch("");
    setShowSelected([]);
    setSelected([]);
    setDataAction([]);
    if (show === true && data.length > 0) {
      let val = props.getValue !== undefined ? props.getValue.value : props.value;
      let mapData = data?.filter(f => !f.isDisabled);
      setSelected(val);
      setDataAction(mapData);
    }
  }, [show, data]);

  /* function */
  const handleSearch = (value) => {
    if (value) {
      let val = value?.toString()?.toLowerCase()?.trim();
      let filterData = data?.filter(f => {
        let isFilter = false;
        if (!f.isDisabled) {
          Object.keys(f).forEach(k => {
            if (selected.filter(v => v === f[valueName]).length === 0) {
              if (f[k]?.toString()?.toLowerCase()?.includes(val)) {
                isFilter = true;
              }
            }
          })
        }
        return isFilter
      })
      let filterSelected = data?.filter(f => selected?.includes(f[valueName]))
      setDataAction(filterData.concat(filterSelected));
    }
    else {
      let mapData = data?.filter(f => !f.isDisabled);
      setDataAction(mapData)
    }
  }

  const handleChecked = (checked) => {
    if (checked) {
      let filterSelected = data?.filter(f => selected?.includes(f[valueName]))
      setDataAction(filterSelected);
    }
    else {
      let mapData = data?.filter(f => !f.isDisabled);
      setDataAction(mapData);
    }
  }

  const handleSelect = (row, isSelect) => {
    if (isSelect) {
      if (selected?.filter((v) => v === row[valueName])?.length === 0) {
        setSelected(selected.concat([row[valueName]]));
      }
    } else {
      setSelected(selected.filter((v) => v !== row[valueName]));
    }
  };

  const handleSelectAll = (isSelect) => {
    if (isSelect) {
      let filterData = data?.filter(f => !f.isDisabled);
      if (filterData.length > 0) {
        let mapData = filterData?.map(m => m[valueName]);
        setSelected(mapData);
      }
    } else {
      setSelected([]);
    }
  };

  const handleConfirm = () => {
    props.onChange({
      target: {
        name: props.name,
        value: selected,
      },
    });
    handleHide();
  }

  const handleHide = () => {
    hide();
  }

  return (
    <Modal centered show={props.show} onHide={() => handleHide()} backdrop="static" size="lg">
      <Modal.Header closeButton className="py-2">
        <p className="fw-bold mb-0">{props.label ? props.label : 'รายการ'}</p>
      </Modal.Header>
      <Modal.Body className="px-3">
        <div className="row g-2 mb-2">
          <div className="col-6">
            <FormInput
              name={`formMultiSelectValueSearch${id}`}
              id={`formMultiSelectValueSearch${id}`}
              value={valueSearch}
              onChange={(e) => {
                setValueSearch(e.target.value)
                handleSearch(e.target.value);
              }}
              placeholder="ค้นหา"
            />
          </div>
          <div className="col-6 pt-2">
            <FormCheckbox
              name={`formMultiSelectShowSelected${id}`}
              value={showSelected}
              options={[
                {
                  id: `formMultiSelectShowSelectedํY${id}`,
                  value: "Y",
                  label: "แสดงรายการที่เลือก"
                },
              ]}
              onChange={(e) => {
                if (e.target.checked) {
                  setShowSelected([e.target.value])
                  handleChecked(true);
                }
                else {
                  setShowSelected([])
                  handleChecked(false);
                }
              }}
            />
          </div>
        </div>
        <BootstrapTable
          id={`tableFormMultiSelect${id}`}
          hover
          keyField={valueName}
          data={dataAction}
          columns={columns}
          selectRow={selectRow}
          wrapperClasses="table-fixed-column h-65vh"
          headerClasses="sticky-top text-white bg-dark"
          classes="min-w-100 mb-0"
          noDataIndication="ไม่พบข้อมูล"
        />
      </Modal.Body>
      <Modal.Footer className="py-1 px-2">
        <div className="d-flex gap-2">
          <button type="button" onClick={() => handleConfirm()} className="btn btn-primary">
            <span className="mx-1">เลือก</span>
            <span className="badge bg-white text-dark ms-1">{selected?.length}</span>
          </button>
          <button type="button" onClick={() => handleHide()} className="btn btn-secondary">
            <span className="ms-1">ปิด</span>
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default FormMultiSelect;
