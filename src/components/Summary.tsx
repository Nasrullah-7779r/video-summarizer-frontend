import React from "react"
import { Box, Typography, Paper } from "@mui/material"

interface SummaryProps {
  text: string
}

const SummaryComp: React.FC<SummaryProps> = ({ text }) => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper
        elevation={3}
        sx={{ padding: 3, maxWidth: 600, textAlign: "justify" }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Summary:
        </Typography>
        <Typography variant="body1">
          {text || "No summary available yet."}
        </Typography>
      </Paper>
    </Box>
  )
}

export default SummaryComp
