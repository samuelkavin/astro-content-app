import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { dayOfWeek, formatTime, isToday } from '../../../helper';
import { TabPanelProps } from '../types';

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`channel-tabpanel-${index}`}
            aria-labelledby={`channel-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'} variant={'body2'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `channel-tab-${index}`,
        "aria-controls": `channel-tabpanel-${index}`
    };
}

function BasicTabs({ schedule }: any) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", marginBottom: '1.5rem' }}>
            <Tabs
                value={value}
                TabIndicatorProps={{ style: { fontWeight: 600 } }}
                onChange={handleChange}>
                {Object.keys(schedule).map((date: any, index: number) => {
                    const day = isToday(date) ? 'Today' : dayOfWeek(date);
                    return <Tab key={index} label={day} {...a11yProps(index)} style={{ minWidth: 0 }} />;
                })}
            </Tabs>

            {Object.values(schedule).map((events: any, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <TabPanel value={value} index={index}>
                            {events.map(({ title, datetime, eventId }: any) => {
                                return (
                                    <Grid key={eventId} container direction="row" spacing={2}>
                                        <Grid item xs={2} md={2} textAlign='left'>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ mb: 1.5, fontSize: '1rem' }}>
                                                {formatTime(datetime)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10} md={10}>
                                            <Typography
                                                variant="body1"
                                                align='left'
                                                sx={{ mb: 1.5, fontSize: '1rem', paddingLeft: '16px' }}>
                                                {title}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </TabPanel>
                    </React.Fragment>
                )
            })}
        </Box>
    );
}

export default React.memo(BasicTabs);