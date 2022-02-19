import React from "react"

const Footer = (props) => {
    return (
        <footer>
            <small>@{props.year} {props.author_last_name} development. All rights reserved.</small>
        </footer>
    )
}

export default Footer;