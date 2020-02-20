import React from 'react';

const ShareGitHub = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-7">
                    <span>
                        <div className="text-center">
                            <h6>Leave a star on Github if this
                            repository was useful :)</h6>
                        </div>
                    </span>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn-default star-btn">
                        <span className="glyphicon glyphicon-star glyph" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" className="btn btn-default">848</button>
                </div>
            </div>
        </div>
    )
}
export default ShareGitHub;