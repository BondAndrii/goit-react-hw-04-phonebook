import React, { useState} from "react";
// import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./Form.css"

export default function Form({priSubmit}) {
    const [id, setId] = useState('');
    const [names, setNames] = useState('');
    const [number, setNumber] = useState('');
    const namesId = nanoid();
    const numberId = nanoid();

    function reset() {
        setId('');
        setNames('');
        setNumber('');        
    }
    const handleChange = e => {
        const { id, name, value } = e.currentTarget;
        setId(id);
        switch (name) {
            case "names":
                setNames(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
        
        // const field = (name) => ({
        //     name: setName(value),
        //     number: setNumber(value),
            
        // }[name])
        // this.setState({
        //     id: nanoid(),  
        //     [name]: value,
                      
        // }
        // );      
    }
    const handleSubmit = e => {
        e.preventDefault();
        const data = { id, names, number };        
        priSubmit(data);
        console.log(data);
        reset();      
    }
return (            
            <form className="Form" onSubmit={handleSubmit}>
                <label className="Label" htmlFor={namesId}>
                    <p className="Text">Iм'я:</p>
                    <input
                        type="text"
                        name="names"
                        className="Input"
                        id={namesId}
                        value={names}
                        onChange={handleChange}
                        placeholder="введи ім'я"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
               
                <label className="Label" htmlFor={numberId}>
                    <p className="Text">Номер:</p>
                    <input
                        type="tel"
                        name="number"
                        className="Input"
                        value={number}
                        id={numberId}
                        onChange={handleChange}
                        placeholder="введи номер телефону"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                
                <button className="Button" type="submit">Запиши!</button>
            </form>               
        );
    
}

//----------------------------------CLASS----------------------------------//
// class Form extends Component {
//     state = {
//         id:'',
//         name: '',
//         number:'',        
//     }
//     nameId = nanoid();
//     numberId = nanoid();
//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({
//             id: nanoid(),  
//             [name]: value,
                      
//         });      
//     }
//     handleSubmit = e => {
//     e.preventDefault();
        
//         this.props.priSubmit(this.state);        
//         console.log("in form after", this.state);
//         this.reset();      
//     }
//     reset = () => {
//         this.setState({ id:'', name: '', number:'', });
//     };
//     render() {
//         return (
            
//             <form className="Form" onSubmit={this.handleSubmit}>
//                 <label className="Label" htmlFor={this.nameId}>
//                     <p className="Text">Iм'я:</p>
//                     <input
//                         type="text"
//                         name="name"
//                         className="Input"
//                         id={this.nameId}
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         placeholder="введи ім'я"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                 </label>
               
//                 <label className="Label" htmlFor={this.numberId}>
//                     <p className="Text">Номер:</p>
//                     <input
//                         type="tel"
//                         name="number"
//                         className="Input"
//                         value={this.state.number}
//                         id={this.numberId}
//                         onChange={this.handleChange}
//                         placeholder="введи номер телефону"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     />
//                 </label>
                
//                 <button className="Button" type="submit">Запиши!</button>
//             </form>
            
                
//         );
//     }
// }
// export default Form;

Form.propTypes= {
    priSubmit: PropTypes.func.isRequired,
}