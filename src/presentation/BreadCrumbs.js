import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './BreadCrumbs.css';

class BreadCrumbs extends Component {

    static propTypes = {
        folders: PropTypes.arrayOf(PropTypes.string).isRequired,
        files: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className='breadCrumbs'>
                {
                    this.props.folders.map((folderId, index) => (
                        (index < this.props.folders.length - 1) ? (
                            <span key={folderId} className='clickable' onClick={() => {
                                this.props.onChange(this.props.folders.slice(0, index + 1));
                            }}>{this.props.files.driveMetadata[folderId].name}</span>
                        ) : (
                            <span key={folderId}>{this.props.files.driveMetadata[folderId].name}</span>
                        )
                    ))
                }
            </div>
        );
    }
}

export default BreadCrumbs;