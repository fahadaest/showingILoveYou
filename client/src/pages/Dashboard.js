import React, { useRef, useEffect, useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Profile from '../components/Dashboard/Profile';
import SideMenu from '../components/Dashboard/SideMenu';
import Memories from '../components/Dashboard/Memories';
import CreateMemory from '../components/Dashboard/CreateMemory';
import api from '../api';

export default function Dashboard({ path }) {

    return (
        <Box sx={{ display: 'flex', marginTop: "9vh" }}>
            <SideMenu />
            <Box
                component="main"
                sx={(theme) => ({
                    flexGrow: 1,
                    backgroundColor: theme.vars
                        ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                        : alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 5,
                        mt: '10px',
                    }}
                >

                    {path === "profile" && (
                        <>
                            <Profile />
                            <Memories />
                        </>
                    )}
                    {path == "create-memory" && <CreateMemory />}
                </Stack>
            </Box>
        </Box>
    );
}