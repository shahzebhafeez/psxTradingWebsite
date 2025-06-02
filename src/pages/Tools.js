import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

const Tools = () => {
  const [investment, setInvestment] = useState(10000);
  const [years, setYears] = useState(5);
  const [returnRate, setReturnRate] = useState(8);
  const [frequency, setFrequency] = useState('monthly');
  const [result, setResult] = useState(null);

  const calculateInvestment = () => {
    const rate = returnRate / 100;
    const periods = years * (frequency === 'monthly' ? 12 : 1);
    const periodicRate = rate / (frequency === 'monthly' ? 12 : 1);
    
    const futureValue = investment * Math.pow(1 + periodicRate, periods);
    const totalInvestment = investment * periods;
    const totalReturn = futureValue - totalInvestment;

    setResult({
      futureValue: futureValue.toFixed(2),
      totalInvestment: totalInvestment.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
    });
  };

  return (
    <div className="bg-gray-50 py-20">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-center font-bold mb-4 text-gray-800">
          Investment Tools
        </Typography>
        <Typography variant="h5" className="text-center mb-12 text-gray-600">
          Make informed investment decisions with our powerful tools
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card className="h-full">
              <CardContent>
                <Box className="flex items-center mb-6">
                  <CalculateIcon className="text-4xl text-primary mr-3" />
                  <Typography variant="h4" className="font-bold">
                    Investment Calculator
                  </Typography>
                </Box>

                <Box className="space-y-6">
                  <div>
                    <Typography variant="subtitle1" className="mb-2">
                      Initial Investment
                    </Typography>
                    <TextField
                      fullWidth
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      InputProps={{
                        startAdornment: '$',
                      }}
                    />
                  </div>

                  <div>
                    <Typography variant="subtitle1" className="mb-2">
                      Investment Period (Years)
                    </Typography>
                    <Slider
                      value={years}
                      onChange={(e, newValue) => setYears(newValue)}
                      min={1}
                      max={30}
                      marks
                      valueLabelDisplay="auto"
                    />
                    <Typography variant="body2" color="textSecondary" className="text-center">
                      {years} years
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="subtitle1" className="mb-2">
                      Expected Annual Return Rate (%)
                    </Typography>
                    <Slider
                      value={returnRate}
                      onChange={(e, newValue) => setReturnRate(newValue)}
                      min={1}
                      max={20}
                      marks
                      valueLabelDisplay="auto"
                    />
                    <Typography variant="body2" color="textSecondary" className="text-center">
                      {returnRate}%
                    </Typography>
                  </div>

                  <FormControl fullWidth>
                    <InputLabel>Investment Frequency</InputLabel>
                    <Select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      label="Investment Frequency"
                    >
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="yearly">Yearly</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={calculateInvestment}
                    className="bg-primary hover:bg-secondary"
                  >
                    Calculate
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full">
              <CardContent>
                <Typography variant="h4" className="font-bold mb-6">
                  Results
                </Typography>

                {result ? (
                  <Box className="space-y-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Typography variant="subtitle1" color="textSecondary">
                        Future Value
                      </Typography>
                      <Typography variant="h4" className="font-bold text-primary">
                        ${result.futureValue}
                      </Typography>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Typography variant="subtitle1" color="textSecondary">
                        Total Investment
                      </Typography>
                      <Typography variant="h4" className="font-bold text-gray-800">
                        ${result.totalInvestment}
                      </Typography>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <Typography variant="subtitle1" color="textSecondary">
                        Total Return
                      </Typography>
                      <Typography variant="h4" className="font-bold text-green-600">
                        ${result.totalReturn}
                      </Typography>
                    </div>
                  </Box>
                ) : (
                  <Typography variant="body1" color="textSecondary" className="text-center py-8">
                    Enter your investment details and click Calculate to see the results
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tools; 