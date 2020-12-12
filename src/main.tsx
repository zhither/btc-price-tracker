import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import type {MainProps, DataProps} from './mainTypes'
import currentData from './services/bitstamp'

const useStyles = makeStyles({
  container: {
    color:'#fff',
    backgroundColor: '#65C9FD',
    borderRadius: '5px',
    paddingTop: '10px',
  },
  root: {
    minWidth:200,
    maxWidth:300,
    margin: '10px',
  },
  title: {
    padding:'10px',
    fontSize: 24,
  },
});

const Main : React.FC<MainProps> = () => {
    const classes = useStyles();
    const [hourlyData,setHourlyData] = useState<keyof DataProps>()

    useEffect(()=>{
        const firstCall = async () => {
            const response: AxiosResponse<any> | undefined = await currentData('btcusd')
            if (response !== undefined){
              setHourlyData(response.data)
            }
        }
        firstCall()
    },[])
  
    return (
      <Grid container 
            spacing={0} xs={12} 
            justify={'flex-start'} 
            direction="row" 
            alignItems="center"
            className={classes.container}>
        <Grid item spacing={1} xs={12} >
          <Typography className={classes.title} >
              BitStamp
          </Typography>
        </Grid>
        <br></br>
        
        {hourlyData && Object.keys(hourlyData).map( (ourData: any)=> {
                return(
                <div key={ourData}>
                    <Card className={classes.root} >
                      <CardContent>
                        <Typography color='primary' variant='h6'>
                          {ourData}
                        </Typography>
                        <Typography>
                          {`${hourlyData[ourData]}`}
                        </Typography>
                      </CardContent>
                    </Card>
                </div>
                )
              })
        } 
      </Grid>
    );
  }

export default Main