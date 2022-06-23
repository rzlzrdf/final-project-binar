import { useMediaQuery } from '@mui/material';
import AddButtonM from '../Components/Mobile/AddButtonM';
import AddButton from '../Components/Web/AddButton'
import CardProdukM from './Mobile/CardProdukM';
import CardProduk from './Web/CardProduk'

const SemuaProduk = () => {
    const isMobile = useMediaQuery("(max-width:425px)");
    return (
        <>
            {isMobile ? (
                <>
                    <AddButtonM />
                    <CardProdukM />
                    <CardProdukM />
                    <CardProdukM />
                    <CardProdukM />
                </>
            ) : (
                <>
                    <AddButton />
                    <CardProduk />
                    <CardProduk />
                    <CardProduk />
                    <CardProduk />
                </>
            )
            }

        </>
    )
}

export default SemuaProduk
