import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../components/utils'
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import PrimaryButton from '../../../components/global/PrimaryButton';
import SecondaryButton from '../../../components/global/SecondaryButton';
import TopBar from '../TopBar';
import { useMediaQuery } from '@material-ui/core';
const bgImage = "https://st2.depositphotos.com/3258807/10726/i/950/depositphotos_107267666-stock-photo-positive-girl-holding-her-glasses.jpg"

const imageData = [
    { id: 0, src: "https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=6&m=125416806&s=612x612&w=0&h=COVa6t9cpz7tjSd0_V3GLfnI07YZ4xekH3amp9LlG7w=" },
    { id: 1, src: "https://media.istockphoto.com/photos/glasses-picture-id165141266?k=6&m=165141266&s=612x612&w=0&h=38PPIpTmhXj22zVrFttgJWdLiIM28EjrA6feGpF5RJA=" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbinnKzY8CnOczK5V47FvdQFH3xCM8UzmVvA&usqp=CAU" },
    { id: 3, src: "https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=6&m=125416806&s=612x612&w=0&h=COVa6t9cpz7tjSd0_V3GLfnI07YZ4xekH3amp9LlG7w=" },
    { id: 4, src: "https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=6&m=125416806&s=612x612&w=0&h=COVa6t9cpz7tjSd0_V3GLfnI07YZ4xekH3amp9LlG7w=" }
]


const useStyles = makeStyles(theme => ({
    main: {
        padding: "40px",
        overflow: "hidden",
        [theme.breakpoints.down('xs')]: {
            padding: "40px 20px"
        }
        // background: 'red'

    },
    productDetails: {
        width: "100%",
        overflow: "hidden",
        // minHeight: "70vh",
        // height: "70vh",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridGap: "20px",
        // justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: "50% 50%"
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr"
        }
    },

    imageContainer: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingRight: "40px",
        minHeight: "60vh",
        height: "60vh",
        // width: "100vw",
        userSelect: "none",

        [theme.breakpoints.down('sm')]: {
            minHeight: "50vh",
            height: "50vh"
        },
        [theme.breakpoints.down("xs")]: {
            minHeight: "30vh",
            height: "30vh",
            width: "100vw"
        },

    },
    mainImgContainer: {
        overflow: "hidden",
        height: "60%",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: "100%"
        },
        [theme.breakpoints.down('sm')]: {
            height: "70%"
        }
    },
    mainImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    smallImagesContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px"
    },
    smallImg: {
        cursor: "pointer",
        width: "100%",
        // height: "auto",
        height: "100px",
        // objectFit: "cover"
        objectFit: "contain"

    },
    eachImgContainer: {
        margin: "0 20px",
        flexBasis: "100%",
        // width: "150px",
        borderRadius: "4px"
    },
    activeImg: {
        border: `3px solid #137D27`,

    },
    details: {
        padding: "40px",
        // overflow: "hidden",
        // marginRight: "80px",
        backgroundColor: colors.background,
        minHeight: "60vh",
        // height: "60vh",
        display: "flex",
        alignItems: "center",
        minWidth: "600px",
        [theme.breakpoints.down('xs')]: {
            padding: "30px 15px"
        }
    },
    detailsContainer: {
        flex: 1
    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        '& p': {
            marginTop: "3px"
        },
        '& h3': {
            fontSize: "32px",
            fontWeight: "500",
            lineHeight: "38px",
            color: colors.black,
            [theme.breakpoints.down('xs')]: {
                fontSize: "24px",
                lineHeight: "28px"
            }
        }
    },
    starIcon: {
        fontSize: "24px",
        margin: "0 2px",
        // color: "#fff",
    },
    reviewsContainer: {
        display: "flex",
        alignItems: "center",
        margin: "0 10px"
    },
    active: {
        color: colors.primary
    },
    description: {
        color: colors.gray,
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        margin: "5px 0"
    },
    model: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "19px",
        color: colors.gray
    },
    price: {
        marginTop: "30px",
        marginBottom: "20px",
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "38px",
        color: colors.primary,
        [theme.breakpoints.down('xs')]: {
            fontSize: "24px",
            lineHeight: "28px"
        }
    },
    colors: {
        '& p': {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: colors.gray
        }
    },

    color: {
        width: "24px",
        height: "24px",
        background: "black",
        borderRadius: "50%",
        margin: "10px 5px",
        userSelect: "none"

    },
    colorsContainer: {
        margin: "10px 0",
        display: "flex",
        // '&:not(:first-child)': {
        //     margin: "0"
        // }
    },
    red: {
        backgroundColor: "#EB5858",
    },
    green: {
        backgroundColor: colors.primary
    },
    yellow: {
        backgroundColor: "#F0CE53"
    },
    darkGreen: {
        backgroundColor: "#03380D"
    },
    gray: {
        backgroundColor: colors.gray
    },
    lightGreen: {
        backgroundColor: colors.lightGreen,
    },
    sizes: {
        margin: "10px 0",
        '& p': {
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "500",
            color: colors.gray
        }
    },
    sizesContainer: {
        display: "flex"
    },
    size: {
        margin: "20px 10px",
        padding: " 15px 30px",
        border: `3px solid ${colors.lightGreen}`,
        borderRadius: "4px",
        cursor: "pointer",
        "&:first-child": {
            margin: "20px 0px",
            marginRight: "5px"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "10px 20px",
            margin: "10px 5px",
            "&:first-child": {
                margin: "10px 0px",
                marginRight: "5px"
            },
        }
    },
    activeSize: {
        border: `3px solid ${colors.primary}`,

    },
    select: {
        '& .PrivateRadioButtonIcon-root-14.PrivateRadioButtonIcon-checked-16 .PrivateRadioButtonIcon-layer-15': {
            color: colors.primary
        },
        '& .MuiSvgIcon-root': {
            color: colors.primary
        },

        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: colors.primary
        },
        '& .MuiRadio-colorSecondary.Mui-checked:hover': {
            borderColor: colors.primary
        },
        '& .MuiTypography-body1': {
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "500",
            color: colors.gray,
            fontFamily: "Rubik"
        }
    },
    types: {
        '& p': {
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "500",
            color: colors.gray
        }
    },
    homeTryOn: {
        marginTop: "10px",
        '& .MuiFormControlLabel-root': {
            marginRight: "0px"
        },
        '& span': {
            display: "inline-block"
        }
    },
    chaseGlass: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column-reverse"
        },
        // display:"grid",
        // gridTemplateColumns: "50% 50%",
        alignItems: "center",
        margin: "40px 0",
        "&>*": {
            flex: "1"
        }
    },
    chaseDescription: {
        padding: " 0 80px ",
        [theme.breakpoints.down('sm')]: {
            padding: "20px 0"
        },
        '& h2': {
            fontSize: "40px",
            lineHeight: "51px",
            fontWeight: "700",
            color: "#000",
            fontFamily: 'Lora',
            textTransform: "capitalize"
        },
        '& p': {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
            color: "#000",
            margin: "10px 0",
            fontFamily: "Rubik"
        }
    },
    chaseImgContainer: {
        height: "400px",
        userSelect: "none",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        '& img': {
            height: "400px",
            width: "100%",
            borderRadius: "4px"
        }
    },
    banner: {
        paddingRight: "140px",
        height: "380px",
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            paddingRight: "60px"
        }
    },
    bannerContainer: {
        width: "30%",
        minWidth: "400px",
        [theme.breakpoints.down('sm')]: {
            width: "50%"
        },
        '& h2': {
            fontFamily: "Lora",
            fontSize: '40px',
            lineHeight: "51px",
            fontWeight: "700",
            textTransform: "capitalize",
            color: "#000",
        },
        '& p': {
            marginTop: "10px",
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "400",
            color: "#000"
        }

    },
    heroImgContainer: {
        '& img': {
            width: "100%",
            height: "300px",
            objectFit: "cover"
        }
    },
    heroSectionText: {
        marginTop: "10px",
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: "Lora",
        color: colors.black,
        textTransform: "capitalize"
    },
    heroSectionBodyText: {
        lineHeight: "22px",
        fontSize: "16px",
        marginTop: "10px",
        fontWeight: "400",
        color: colors.black
    },

    slider: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
    },
    sliderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "30px"
    },
    dots: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "#8D8D8D",
        margin: "0 5px",
        '&:first-child': {
            marginRight: "5px",
            marginLeft: "0px"
        }
    },
    dotActive: {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: colors.primary
    }


}))
const ProductDetails = () => {
    const classes = useStyles()
    const [imageIndex, setImageIndex] = useState([0])
    const [imagesData, setImagesData] = useState(imageData)
    const image = imagesData[imageIndex].src
    const active = useMediaQuery("(min-width:600px)")
    console.log(active, "Active")
    const [value, setValue] = React.useState("Prescription");
    const handleChange = (e) => {
        console.log(e, "event")
        setValue(e.target.value);
    };
    const imageClickHandler = (index) => {
        console.log(index, "ismage")
        setImageIndex(index)
        // if (image.id === index) {

        // }
    }
    const dots = new Array(imagesData.length)
    return (
        <>
            <TopBar />
            <div className={classes.main}>
                <div className={classes.productDetails}>
                    <div className={classes.imageContainer}>
                        <div className={classes.mainImgContainer}>
                            <img src={image} className={classes.mainImg} alt="" />
                        </div>
                        {active ? <div className={classes.smallImagesContainer}>
                            {imagesData.map((img, index) => {
                                return (
                                    <div onClick={() => imageClickHandler(index)} className={`${classes.eachImgContainer} ${index === imageIndex && classes.activeImg}`}>
                                        <img src={img.src} className={classes.smallImg} />
                                    </div>
                                )
                            })}


                        </div> : (<div className={classes.slider}>
                            <div className={classes.sliderContainer}>
                                {Array.from({ length: imagesData.length }).map((dot, index) => {
                                    return (
                                        <div onClick={() => imageClickHandler(index)} className={`${classes.dots} ${index === imageIndex && classes.dotActive}`}></div>
                                    )
                                })}
                            </div>
                        </div>)}

                    </div>
                    <div className={classes.details}>
                        <div className={classes.detailsContainer}>
                            <div className={classes.titleContainer}>
                                <h3 className={classes.title}>Chase</h3>
                                <div className={classes.reviewsContainer}>
                                    <StarRoundedIcon className={`${classes.starIcon} ${classes.active}`} />
                                    <StarRoundedIcon className={`${classes.starIcon} ${classes.active}`} />
                                    <StarRoundedIcon className={`${classes.starIcon} ${classes.active}`} />
                                    <StarBorderRoundedIcon className={classes.starIcon} />
                                    <StarBorderRoundedIcon className={classes.starIcon} />
                                </div>
                                <p>(288 Reviews)</p>
                            </div>
                            <p className={classes.description}>Product Description(short)</p>
                            <p className={classes.model}>model:H231ff</p>
                            <h4 className={classes.price}>Rs. 2400.00</h4>
                            <div className={classes.colors}>
                                <p>Select Colors</p>
                                <div className={classes.colorsContainer}>
                                    <div className={`${classes.color} ${classes.red}`}></div>
                                    <div className={`${classes.color} ${classes.green}`}></div>
                                    <div className={`${classes.color} ${classes.yellow}`}></div>
                                    <div className={`${classes.color} ${classes.darkGreen}`}></div>
                                    <div className={`${classes.color} ${classes.gray}`}></div>
                                    <div className={`${classes.color} ${classes.lightGreen}`}></div>
                                </div>
                                <div className={classes.sizes}>
                                    <p>Select Sizes</p>
                                    <div className={classes.sizesContainer}>
                                        <div className={`${classes.size} ${classes.small}`}>Small</div>
                                        <div className={`${classes.size} ${classes.activeSize}`}>Medium</div>
                                        <div className={`${classes.size} ${classes.small}`}>Large</div>
                                    </div>
                                </div>
                                <div className={classes.types}>
                                    <p>Types</p>
                                    <FormControl component="fieldset">
                                        <RadioGroup className={classes.select} aria-label="select" name="select" value={value} onChange={handleChange}>
                                            <div className={classes.type}>
                                                <FormControlLabel value="Prescription" control={<Radio />} label="Prescription" />
                                                <FormControlLabel name="Normal" value="Normal" control={<Radio />} label="Normal" />
                                            </div>
                                            <div className={classes.homeTryOn}>
                                                <FormControlLabel value="Home Try-On" control={<Radio />} label="Home Try-On" />
                                                <span>(Available: Get 5-frames to try at home)</span>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <PrimaryButton title="Select lens for purchase" style={{ width: "70%", justifyContent: "start" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.chaseGlass}>
                    <div className={classes.chaseDescription}>
                        <h2 >About chase glass</h2>
                        <p>Chase has a frame shape that is classic and timeless. The unassuming shape and subtle hinge studs
                            are understated and stylish. What makes these eyeglasses really stand out is the two-tone
                            Gray and Brown finish. The smooth fade between the colors on the lens frame creates a truly modern look.</p>
                    </div>
                    <div className={classes.chaseImgContainer}>
                        <img src="https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjB3aXRoJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    </div>
                </div>
                {active ? <div className={classes.banner}>
                    <div className={classes.bannerContainer}>
                        <h2>Find eaxct width that fits you</h2>
                        <p>If your face is average in size, which is most common, this frame should fit you well.
                            Unsure of your size? Select a few different options in a free Home Try-On.</p>
                        <SecondaryButton title="Find your width" style={{ width: "50%", justifyContent: "flex-start" }} />
                    </div>
                </div> :
                    <div className={classes.heroSection}>
                        <div className={classes.heroImgContainer}>
                            <img src={bgImage} alt="Lady wearing glasses" />
                        </div>
                        <div className={classes.heroSectionText}>Find eaxct width that fits you</div>
                        <div className={classes.heroSectionBodyText}>If your face is average in size, which is most common, this frame should fit you well. Unsure of your size? Select a few different options in a free Home Try-On.</div>
                        <SecondaryButton title="Find your width" style={{ width: "50%", justifyContent: "flex-start" }} />
                    </div>
                }

            </div>
        </>
    )
}
export default ProductDetails