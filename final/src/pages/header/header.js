import { useCallback, useState } from "react"
import { useForm } from "react-hook-form";
import barcLogo from '../../assets/images/barca.png';
import { memo } from "react";

 const Header = ({ list, setList }) => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [position, setPosition] = useState('');
    const [number, setNumber] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const changeName = (e) => {
        setName(e.target.value)
    };

    const changeYear = (e) => {
        setYear(e.target.value)
    };

    const changePosition = (e) => {
        setPosition(e.target.value)
    };

    const changeNubmer = (e) => {
        setNumber(e.target.value)
    };

    const addNew = useCallback(() => {
        if (name !== '' && year !== '' && position !== '' && number !== '') {
            setList([...list, { name: name, year: year, position: position, number: number, id: Math.random() }])
        }
    }, [name, year, position, number]);

    return (
        <form className="header-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="header-body">
        <div className="header-div">
            <div style={{ display: 'flex' }}>
                <img className="logo" src={barcLogo} alt="logo" />
                <p className="header-text"> <b>FC Barcelona</b></p>
            </div>
            <input {...register("example1", { required: true })} className="add-input" placeholder="name" value={name} onChange={changeName} type="text" />
            <input {...register("example2", { required: true })} className="add-input" placeholder="year" value={year} onChange={changeYear} type="number" />
            <input {...register("example3", { required: true })} className="add-input" placeholder="position" value={position} onChange={changePosition} type="text" />
            <input {...register("example4", { required: true })} className="add-input" placeholder="number" value={number} onChange={changeNubmer} max={99} type="number" />
            {(errors.example1 || errors.example2 || errors.example3 || errors.example4) && <span> add all inputs!!! </span>}
            <button onClick={addNew} className="header-btn">Add New Player</button>
        </div>
        </div>
        </form>
    )
}

export default memo(Header)