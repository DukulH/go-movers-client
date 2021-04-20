import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ContactInfo from '../ContactInfo/ContactInfo';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';
import WorkFlow from '../WorkFlow/WorkFlow';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WorkFlow></WorkFlow>
            <Services></Services>
            <ShowReview></ShowReview>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;