import { Box, CircularProgress } from "@mui/material"

export function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={40} />
    </Box>
  )
}

export default function Spacer({
  marginTop = 5,
  marginBottom = 2,
  padding = 2,
}) {
  return <Box sx={{ mt: marginTop, mb: marginBottom, p: padding }}></Box>
}
