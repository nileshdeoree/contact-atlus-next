import React, { useState } from 'react'

const Contact = () => {

    const [note, setNote] = useState({ title: "" })
    // const notesInitial = []
    // const [notes, setNotes] = useState(notesInitial)

    const addNote = async (title, email, phone, message) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`http://localhost:3000/api/addcontact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, email , phone, message })
        });
        response.json()
    }

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.email, note.phone, note.message);
        // console.log(note.title);
        setNote({ title: "" })
        alert("Added Successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        console.log(note)
    }

    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-center text-gray-800">
                <div className="max-w-[700px] mx-auto px-3 lg:px-6">
                    <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                    <form type='submit'>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" value={note.title} name = "title" onChange={onChange}/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address" name = "email" value={note.email} onChange={onChange} />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Phone" name="phone" value={note.phone} onChange={onChange} />
                        </div>
                        <div className="form-group mb-6">
                            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="exampleFormControlTextarea13" rows="3" placeholder="Message" name='message' value={note.message} onChange={onChange} ></textarea>
                        </div>
                        
                        <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>Send</button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Contact






























// <div>
// <form className="w-full max-w-sm" type="submit">

//     <div className="md:flex md:items-center mb-6">
//         <div className="md:w-1/3">
//             <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
//                 Full Name
//             </label>
//         </div>
//         <div className="md:w-2/3">
//             <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={note.title} onChange={onChange} name="title" />
//         </div>
//     </div>

//     <div className="md:flex md:items-center">
//         <div className="md:w-1/3"></div>
//         <div className="md:w-2/3">
//             <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleClick}>
//                 Add note
//             </button>
//         </div>
//     </div>
// </form>
// </div>