import React from 'react'
import Box from '@mui/material/Box';
import { Category } from '../types';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    circle: {
        display: 'flex',
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        minWidth: '100px',
        minHeight: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        color: '#fff',
        marginRight: '0.5rem',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#fc548e',
        },
    }
}));

function Categories({ categories, handleSelectedCategory }: any) {

    const classes = useStyles();
    return (
        <>
            {categories &&
                categories.map((category: Category) => {
                    return (
                        <Box
                            key={category.id}
                            className={classes.circle}
                            sx={{ width: '100px', height: '100px' }}
                            onClick={e => handleSelectedCategory(e, category.name)}>
                            <div>
                                {category.name}
                            </div>
                        </Box>
                    );
                })}
        </>
    )
}

export default Categories