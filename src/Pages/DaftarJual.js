import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material"
import Header from "../Containers/Web/Header";
import CategoryBox from "../Containers/Web/CategoryBox";
import ProfileList from "../Containers/Web/ProfileList";

import HeaderM from "../Containers/Mobile/HeaderM";
import Sidebar from "../Components/Mobile/SidebarM";
import ProfileListM from "../Containers/Mobile/ProfileListM";
import CategoryBoxM from "../Containers/Mobile/CategoryBoxM";
import SemuaProduk from "../Containers/SemuaProduk";
import Diminati from "../Containers/Diminati";
import Terjual from "../Containers/Terjual";

const DaftarJual = () => {
    const isMobile = useMediaQuery("(max-width:425px)");
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState('Semua Produk');

    return (
        <>
            {
                isMobile ? (
                    <Box>
                        {open && <>
                            <Box bgcolor={'rgba(0, 0, 0, 0.6)'} position={'fixed'} width={"100%"} height={"100%"} />
                            <Sidebar setOpen={setOpen} />
                        </>}
                        <Box p={2} width={"100%"} height={"100%"}>
                            <HeaderM setOpen={setOpen} />
                            <ProfileListM />
                        </Box>
                        <CategoryBoxM page={page} setPage={setPage} />
                        <Box p={2} display='flex' alignItems='center' flexWrap='wrap' gap={1.5} >
                            {page === 'Semua Produk' && <SemuaProduk />}
                            {page === 'Diminati' && <Diminati />}
                            {page === 'Terjual' && <Terjual />}
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Header page={'daftar-jual'} />
                        <Box mx={28} mt={4}>
                            <Typography variant="h5" mb={2}>Daftar Jual Saya</Typography>
                            <ProfileList />
                        </Box>
                        <Box mx={28} mt={4} display='flex'>
                            <CategoryBox page={page} setPage={setPage} />
                            <Box ml={'2rem'} display="flex" flexWrap='wrap' sx={{ width: 'calc(80% - 2rem)' }}>
                                <Box display='flex' alignItems='center' flexWrap='wrap' gap={2}>
                                    {page === 'Semua Produk' && <SemuaProduk />}
                                    {page === 'Diminati' && <Diminati />}
                                    {page === 'Terjual' && <Terjual />}
                                </Box>
                            </Box>
                        </Box>
                    </>
                )
            }
        </>
    )
}

export default DaftarJual
