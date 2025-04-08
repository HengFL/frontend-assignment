import React from 'react';

function UsersIndex() {

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <p className="mb-2">
                    <span className="fw-bold">Source Code : </span>
                    <a href="https://github.com/HengFL/frontend-assignment-typescript.git" target="_blank" className="btn-text-blue">https://github.com/HengFL/frontend-assignment-typescript.git</a>
                </p>

                <div className="card rounded-3" >
                    <div className="card-body rounded-3 p-3 bg-light-gray">
                        <iframe src={'https://hengfl.github.io/frontend-assignment-typescript/'} width="100%" height={303} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UsersIndex;