import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import personalizedVMImg from '../../assets/personalizedVM-Img.jpeg';
import ScheduledMDImg from '../../assets/ScheduledMDImg.jpeg';
import SecureMLImg from '../../assets/SecureMLImg.jpeg';

function PersonalVideoMessage() {
    const navigate = useNavigate();

    const handleNavigate = (page) => {
        if (page === 'PVM') {
            navigate('/pricing');
        }
        if (page === 'SMD') {
            navigate('/pricing');
        }
        if (page === 'SML') {
            navigate('/pricing');
        }
    };

    return (
        <section className="flex justify-center items-center pt-12 pb-12 min-h-[80vh] bg-pm-message-bg">
            <div className=" w-[80%] bp900:w-[70%] h-[80%] flex items-center justify-between flex-col bp900:flex-row">
                <div className=" w-[100%] bp900:w-[100%] h-full flex flex-col items-start gap-5">
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: 'poppins',
                            fontSize: '14px',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#32AA27',
                            textTransform: 'uppercase',
                        }}
                    >
                        Personal Video Message
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: 'poppins',
                            fontSize: '32px',
                            fontWeight: 600,
                            letterSpacing: '.05rem',
                            color: '#020402',
                            marginBottom: '20px',
                        }}
                    >
                        Create lasting memories for your loved ones.
                    </Typography>

                    <Box className="flex flex-col bp900:flex-row gap-5">
                        <Box
                            onClick={() => handleNavigate("PVM")}
                            sx={{
                                backgroundColor: "#fff",
                                boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.15)",
                                transition: "transform 0.1s ease-in-out",
                                "&:hover": {
                                    cursor: "pointer",
                                    transform: "scale(1.05)",
                                    boxShadow: "0 5px 20px 0 #32AA27",
                                    "& .hover-text": {
                                        color: "#32AA27",
                                    },
                                },
                            }}>
                            <Box>
                                <img
                                    src={personalizedVMImg}
                                    alt="Hero Image"
                                    className="w-full h-full object-cover object-center"
                                />
                            </Box>

                            <Box sx={{ padding: "25px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                <Typography
                                    variant="h1"
                                    className="hover-text"
                                    sx={{
                                        fontFamily: 'poppins',
                                        fontSize: '22px',
                                        fontWeight: 600,
                                        letterSpacing: '.1rem',
                                        color: '#020402',
                                    }}
                                >
                                    Public Video Memories
                                    <NavigateNextIcon />
                                </Typography>

                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontFamily: 'poppins',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        letterSpacing: '.1rem',
                                        color: '#595959',
                                    }}
                                >
                                    Create public video messages that stay on your profile forever, keeping your memories alive for everyone to see.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            onClick={() => handleNavigate("SMD")}
                            sx={{
                                backgroundColor: "#fff",
                                boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.15)",
                                transition: "transform 0.1s ease-in-out",
                                "&:hover": {
                                    cursor: "pointer",
                                    transform: "scale(1.05)",
                                    boxShadow: "0 5px 20px 0 #32AA27",
                                    "& .hover-text": {
                                        color: "#32AA27",
                                    },
                                },
                            }}>
                            <Box>
                                <img
                                    src={ScheduledMDImg}
                                    alt="Hero Image"
                                    className="w-full h-full object-cover object-center"
                                />
                            </Box>
                            <Box sx={{ padding: "25px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                <Typography
                                    variant="h1"
                                    className="hover-text"
                                    sx={{
                                        fontFamily: 'poppins',
                                        fontSize: '20px',
                                        fontWeight: 600,
                                        letterSpacing: '.1rem',
                                        color: '#020402',
                                    }}
                                >
                                    Private Messages for Later
                                    <NavigateNextIcon />
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontFamily: 'poppins',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        letterSpacing: '.1rem',
                                        color: '#595959',
                                    }}
                                >
                                    Send private messages that remain locked and unseen until someone confirms your death — even after you're gone.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            onClick={() => handleNavigate("SML")}
                            sx={{
                                backgroundColor: "#fff",
                                boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.15)",
                                transition: "transform 0.1s ease-in-out",
                                "&:hover": {
                                    cursor: "pointer",
                                    transform: "scale(1.05)",
                                    boxShadow: "0 5px 20px 0 #32AA27",
                                    "& .hover-text": {
                                        color: "#32AA27",
                                    },
                                },
                            }}>
                            <Box>
                                <img
                                    src={SecureMLImg}
                                    alt="Hero Image"
                                    className="w-full h-full object-cover object-center"
                                />
                            </Box>
                            <Box sx={{ padding: "25px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                <Typography
                                    variant="h1"
                                    className="hover-text"
                                    sx={{
                                        fontFamily: 'poppins',
                                        fontSize: '20px',
                                        fontWeight: 600,
                                        letterSpacing: '.1rem',
                                        color: '#020402',
                                    }}
                                >
                                    Scheduled Message Delivery
                                    <NavigateNextIcon />
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontFamily: 'poppins',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        letterSpacing: '.1rem',
                                        color: '#595959',
                                    }}
                                >
                                    Schedule your messages to be sent at specific times, ensuring they reach your loved ones right when you want them to.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </div>
        </section >
    );
}

export default PersonalVideoMessage;