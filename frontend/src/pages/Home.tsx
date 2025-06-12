import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <PageWrapper>
            <NavBar></NavBar>
        </PageWrapper>
    );
}