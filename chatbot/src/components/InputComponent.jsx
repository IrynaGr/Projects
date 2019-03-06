import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({ form, onChange, value }) => {
    const { class: className, repeat, values, ...restProps } = form;

    switch (restProps.type) {
        case 'radio':
            return (
                <section className="form-input">
                    {values.map(radioItem => (
                        <label>
                            <input
                                {...restProps}
                                className={className}
                                value={radioItem.value}
                                onChange={onChange}
                            />
                            {radioItem.text}
                        </label>
                    ))}
                </section>
            );
        default:
            return (
                <section className="form-input">
                    <input
                        {...restProps}
                        value={value}
                        className={className}
                        onChange={onChange}
                    />
                </section>
            );
    }
};

InputComponent.propTypes = {
    form: PropTypes.shape()
};

export default InputComponent;
