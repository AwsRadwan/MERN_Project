import React from 'react'
import Navbar from '../components/Navbar'

const AboutUs = ({
    data,
    setData
}) => {
    return (
        <>
        <Navbar 
            data={[...data]}
            setData={setData}
        />
        <div id="aboutUs">
            <h1>The National Library</h1>
            <p>
            We inspire and enable independent minds, providing resources, spaces and technologies.


            This is a multi-disciplinary online library serving the faculty, students, researchers and staff of the university. institutions, individual executives and researchers with certain conditions.
             The library has a rich and diverse collection of materials.
              The collection is ideally suited to encourage and support both scholarly pursuits and practical research activities.
</p>

            
        </div>
        <div id="mission">
            <h2> Our Mission : </h2>
            <p>
            Our mission is to excel in supporting the academic and scholarly endeavor of our users, in their core instructional and research requirements through utilizing the best possible resources, systems and services.
            </p>

        </div>
        <div id = "address">
            <h2>Our Address : </h2>
            <p>
            أبو شخيدم، رام الله - فلسطين

بالقرب من مدرسة الشهيد محمد عودة أبو ظاهر
            </p>

        </div>
        </>
    )
}

export default AboutUs
