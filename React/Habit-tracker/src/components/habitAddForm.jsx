import React, { PureComponent } from 'react';

//⭐PureComponent : data가 변경되지 않는다면 rerendering되지 않는다.
class HabitAddForm extends PureComponent {
    formRef= React.createRef();
    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    render() {
        console.log('habitAddForm')
        return (
            <>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                    <input 
                        ref={this.inputRef}
                        className="add-input" 
                        type="text" 
                        placeholder='add your Habbit'
                    />
                    <button className="add-button">Add</button>
                </form>
            </>
        );
    }
}

export default HabitAddForm;