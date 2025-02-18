import homeImg from "../images/home-image.png"
import hobbiesImg from "../images/hobbies-image.avif"
import projectsImg from "../images/projects-image.avif"
import linksImg from "../images/links-image.webp"
import instagramImg from "../images/instagram-img.jpg"
import outlookImg from "../images/outlook-image.jpeg"
import linkedinImg from "../images/linkedin-img.svg"
import githubImg from "../images/githubfull-logo.jpeg"

export default [
    {
        time: "8:30",
        flight: {
            img: homeImg,
            number: "AZ1923"
        },
        destination: "Home",
        gate: "1",
        remarks: "Gate Open"
    },
    {
        time: "8:45",
        flight: {
            img: hobbiesImg,
            number: "QR8148"
        },
        destination: "Hobbies",
        gate: "2",
        remarks: "Gate Closing"
    },
    {
        time: "8:45",
        flight: {
            img: projectsImg,
            number: "CX7264"
        },
        destination: "Projects",
        gate: "3",
        remarks: "Gate Closing"
    },
    {
        time: "9:00",
        flight: {
            img: linksImg,
            number: "ZY7645"
        },
        destination: "Links",
        gate: "3",
        remarks: "Boarding"
    },
    {
        time: "9:30",
        img: "blah",
        flight: {
            img: instagramImg,
            number: "AK1387"
        },
        destination: "Instagram",
        gate: "4",
        remarks: "Gates Closed"
    },

    {
        time: "9:10",
        img: "blah",
        flight: {
            img: outlookImg,
            number: "OP8451"
        },
        destination: "Email",
        gate: "4",
        remarks: "Cancelled"
    },
    {
        time: "9:10",
        img: "blah",
        flight: {
            img: linkedinImg,
            number: "AF5883"
        },
        destination: "LinkedIn",
        gate: "4",
        remarks: "Cancelled"
    },
    {
        time: "9:10",
        flight: {
            img: githubImg,
            number: "CX3429"
        },
        destination: "GitHub",
        gate: "8",
        remarks: "Gates Open"
    }
];
