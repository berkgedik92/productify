import React, { Component } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPeopleArrows, faLaptopCode, faLaptopHouse, faTasks, faVideo, faMicrochip, faAd } from '@fortawesome/free-solid-svg-icons';
import './AboutPage.css';

export default class AboutPage extends Component {


    constructor(props) {
        super(props);
        this.items = [
            {"name": "Remote Work", "icon": faLaptopHouse, "color": "var(--productify-red)"},
            {"name": "Software Development", "icon": faLaptopCode, "color": "var(--productify-green)"},
            {"name": "HR", "icon": faPeopleArrows, "color": "var(--productify-turquoise)"},
            {"name": "Product Management", "icon": faTasks, "color": "var(--productify-orange)"},
            {"name": "Sales", "icon": faHeadset, "color": "var(--productify-purple)"},
            {"name": "Media", "icon": faVideo, "color": "var(--productify-yellow)"},
            {"name": "IT", "icon": faMicrochip, "color": "var(--productify-pink)"},
            {"name": "Marketing", "icon": faAd, "color": "var(--productify-blue)"},
        ];
    }

    render() {

        const itemsToRender = this.items.map(function(item) {
            return (
                <div className="aboutPage__useCaseItem aboutPage" style={{background: item.color}}>
                    <h5 className="aboutPage__useCaseItemName">{item.name}<FontAwesomeIcon className="aboutPage__icon" icon={item.icon}/></h5>
                </div>
            );
        });

        return (
            <div className="aboutPage centeredContent">
                <div className="aboutPage__section aboutPage__section1">
                    <h2 className="aboutPage__sectionHeader">increase productivity, any time, anywhere</h2>
                    <div className="aboutPage__useCaseItems">
                        {itemsToRender}
                    </div>
                </div>
            </div>
        )
    }
}
