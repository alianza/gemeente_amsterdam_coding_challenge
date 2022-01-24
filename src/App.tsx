import { useState } from 'react';
import './App.scss';
import Layout from "./components/layout/layout";
import Form from "./components/form/form";
import { Melding } from "./lib/types/melding";
import { FormDataArray } from "./lib/types/formDataArray";
import Dialog from "./components/dialog/dialog";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const melding: Melding = {
    naam: "Pieter Sjaak",
    email: "pieter@amsterdam.nl",
    dateTime: new Date(),
}

const App = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<FormDataArray>([]);

    const handleSubmit = (formData: FormDataArray) => {
        console.log(formData);
        setFormData(formData);
        setOpen(true);
    };

    return (
        <>
            <Header/>

            <Layout>
                <h1>Nieuwe Melding:</h1>
                <Form melding={melding} onSubmit={handleSubmit}/>
            </Layout>

            <Dialog open={open} setOpen={setOpen} formData={formData}/>

            <Footer/>
        </>
    );
};

export default App;
