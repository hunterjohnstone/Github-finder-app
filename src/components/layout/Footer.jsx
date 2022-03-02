import { Link } from "react-router-dom"

function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <footer className ='footer p-10 bg-gray-500 text-primary-content footer-center'>
            <div>
                <p text>Copyright &copy; {footerYear}, all rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
