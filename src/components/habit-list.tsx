import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import {
  CheckBoxRounded,
  CheckCircleOutlined,
  DeleteOutline,
} from "@mui/icons-material";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems={"center"}>
              <Grid xs={12} sm={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textTransform: "capitalize" }}
                >
                  {habit.frequency}
                </Typography>
              </Grid>

              <Grid xs={12} sm={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  {/* Mark as complete button */}
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircleOutlined />}
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>

                  {/* Remove button */}
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteOutline />}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
