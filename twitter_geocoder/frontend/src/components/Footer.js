import React, { Component } from "react";
import SimpleReactFooter from "simple-react-footer";

class Footer extends Component {

    render() {
        const title = "Canadian Twitter Traffic Reports";
        const description = "This website is dedicated to geo-tag the tweets that report traffic incidents in Canadian provinces. The reports are extracted" + 
        " from official Twitter accounts that report confirmed cases. The big picture is to develop a responsive route finding system for Passenger and Commercial vehicles.";
        const columns = [
            {
                title: "Resources",
                resources: [
                    {
                        name: "About",
                        link: "/about"
                    },
                    {
                        name: "Contact",
                        link: "/contact"
                    }
                ]
            },
            {
                title: "Legal",
                resources: [
                    {
                        name: "Privacy",
                        link: "/privacy"
                    },
                    {
                        name: "Terms",
                        link: "/terms"
                    }
                ]
            }
        ];
        return (
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="fluffy_cat_on_linkedin"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest=""
                copyright="Ebola!"
                iconColor="white"
                backgroundColor="#175fc7"
                fontColor="white"
                copyrightColor="white"
            />
        );
    }
}

export default Footer;