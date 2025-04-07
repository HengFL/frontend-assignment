import React, { useState } from 'react';
import MainList from './MainList';
import ItemsColumn from './ItemsColumn';

const initialItems = [
    { type: 'Fruit', name: 'Apple' },
    { type: 'Vegetable', name: 'Broccoli' },
    { type: 'Vegetable', name: 'Mushroom' },
    { type: 'Fruit', name: 'Banana' },
    { type: 'Vegetable', name: 'Tomato' },
    { type: 'Fruit', name: 'Orange' },
    { type: 'Fruit', name: 'Mango' },
    { type: 'Fruit', name: 'Pineapple' },
    { type: 'Vegetable', name: 'Cucumber' },
    { type: 'Fruit', name: 'Watermelon' },
    { type: 'Vegetable', name: 'Carrot' }
];

function TodoListIndex() {

    /* state */
    const [mainItems, setMainItems] = useState(initialItems);
    const [fruitItems, setFruitItems] = useState([]);
    const [vegetableItems, setVegetableItems] = useState([]);

    /* functions */
    const handleMoveToCategory = (item) => {
        setMainItems(prev => prev.filter(i => i.name !== item.name));

        if (item.type === 'Fruit') {
            setFruitItems(prev => [...prev, item]);
        } else {
            setVegetableItems(prev => [...prev, item]);
        }
    };

    const handleReturnToMainList = (item) => {
        if (item.type === 'Fruit') {
            setFruitItems(prev => prev.filter(i => i.name !== item.name));
        } else {
            setVegetableItems(prev => prev.filter(i => i.name !== item.name));
        }

        setMainItems(prev => [...prev, item]);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <p className="mb-2">
                    <span className="fw-bold">Source Code : </span>
                    <a href="https://github.com/HengFL/frontend-assignment.git" target="_blank" className="btn-text-blue">https://github.com/HengFL/frontend-assignment.git</a>
                </p>
                <div className="row">
                    <div className="col-4">
                        <MainList items={mainItems} onItemClick={handleMoveToCategory} />
                    </div>
                    <div className="col-4">
                        <ItemsColumn
                            type="Fruit"
                            items={fruitItems}
                            onItemClick={handleReturnToMainList}
                            autoMoveBack={handleReturnToMainList}
                        />
                    </div>
                    <div className="col-4">
                        <ItemsColumn
                            type="Vegetable"
                            items={vegetableItems}
                            onItemClick={handleReturnToMainList}
                            autoMoveBack={handleReturnToMainList}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoListIndex;