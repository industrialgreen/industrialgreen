import useTranslation from "next-translate/useTranslation"

const Footer = () => {
    const {t} = useTranslation("common")
    return (
        <footer className="footer">
            <div className="adress">
                <p>INDUSTRIAL GREEN</p>
                <p>ul. Faradaya 54,</p>
                <p>42-202 Częstochowa</p>
                <p>tel: 607-867-999</p>
                <p>e-mail: industrialgreen@gmail.com</p>
            </div>
            <p>&copy; {t("footer")} </p>
        </footer>
    )
}

export default Footer
