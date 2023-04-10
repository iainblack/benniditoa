import { BenniditosInfo } from "@/src/utils/utils";
import {
  Box,
  Button,
  Divider,
  Fade,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface ReservationsPanelProps {
  transitionIn: boolean;
}

export function ReservationsPanel(props: ReservationsPanelProps) {
  const router = useRouter();
  const theme = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        mb: 5,
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box
            sx={{
              height: "fit-content",
              display: "flex",
              flexDirection: { xs: "column", xl: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "70%",
                height: "80vh",
                order: 1,
                display: { xs: "none", xl: "flex" },
              }}
            >
              <Image
                src="/reservations.jpeg"
                alt="Outside"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                width: { xs: "100%", xl: "30%" },
                ml: { xs: 0, xl: 3 },
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                order: 2,
                height: { xs: "fit-content", xl: "80vh" },
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", mb: 1, fontFamily: "Header" }}
                  variant="h4"
                >
                  Reservations
                </Typography>
                <Divider
                  sx={{
                    mb: 2,
                    mx: { xs: "15%", sm: "30%", md: "20%" },
                    borderBottomStyle: "dashed",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mx: "auto",
                    px: 2,
                    fontFamily: "body",
                  }}
                >
                  The BrewPub location is the <b>only location</b> that takes
                  reservations of up to 15 people. Please call the BrewPub to
                  make a reservation.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ my: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontFamily: "header",
                      fontSize: theme.typography.body1.fontSize,
                    }}
                    onClick={() => {
                      window.open("tel:+5092905018", "_blank");
                    }}
                  >
                    (509) 290-5018
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
