import React from "react";
import { ANIMATIONS, DRAGON_BONES, DRUMS, IMAGES, INFO, RULES, UI } from "../../utils/links";
import {
    AccessibilityNew,
    BurstMode,
    Error,
    GroupWork,
    Info,
    PhotoLibrary,
    ViewCarousel,
    Visibility
} from "@material-ui/icons";

export const MenuElements = [
    {
        name: "Resources",
        Icon: () => <ViewCarousel/>,
        children: [
            {
                name: "Images",
                Icon: () => <PhotoLibrary/>,
                link: IMAGES
            },
            {
                name: "Animations",
                Icon: () => <BurstMode/>,
                link: ANIMATIONS
            },
            {
                name: "Dragon Bones",
                Icon: () => <AccessibilityNew/>,
                link: DRAGON_BONES
            }
        ]
    },
    {
        name: "Drums",
        Icon: () => <GroupWork/>,
        link: DRUMS
    },
    {
        name: "Rules",
        Icon: () => <Error/>,
        link: RULES
    },
    {
        name: "UI",
        Icon: () => <Visibility/>,
        link: UI
    },
    {
        name: "Info",
        Icon: () => <Info/>,
        link: INFO
    }
];
