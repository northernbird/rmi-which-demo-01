import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "../welcome/components/Button";
import React from "react";

function WelcomePage() {
    return (
        <Box fontFamily="Lato">
            <Box letterSpacing={'0.1em'} fontSize={14} fontWeight={700}>
               プロフィール
            </Box>
        </Box>
    );
}

export default WelcomePage;
