import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <PageWrapper>
            <Text>Hello world!</Text>
        </PageWrapper>
    );
}