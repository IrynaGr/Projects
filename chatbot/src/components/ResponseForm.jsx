import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputComponent from './InputComponent';
import Button from './Button';

class ResponseForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            value: ''
        }
    }

    static propTypes = {
        form: PropTypes.shape,
        submitResponse: PropTypes.func,
        isFormActive: PropTypes.bool
    };

    handleChange = ({ target: { name, value } }) =>
        this.setState({
            name,
            value
        });

    handleClick = () => {
        const { name, value } = this.state;
        const { isFormActive, submitResponse } = this.props;

        isFormActive && submitResponse({
            name,
            value
        });

        this.setState({
            name: '',
            value: ''
        });
    };

    render() {
        return (
            <section className="chat-footer-form-input">
                {this.props.form &&
                    <InputComponent
                        form={this.props.form}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                }
                <div className="form-submit">
                    <Button onClick={this.handleClick} />
                </div>
            </section>
        );
    }
}

export default ResponseForm;
