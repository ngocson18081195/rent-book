const styles = theme => ({
    fieldset: {
        margin: 0,
        padding: 0,
        webkitMarginStart: 0,
        webkitMarginEnd: 0,
        webkitPaddingBefore: 0,
        webkitPaddingStart: 0,
        webkitPaddingEnd: 0,
        webkitPaddingAfter: 0,
        border: 0,
    },
    s01: {
        minHeight: '100vh',
        display: '-ms-flexbox',
        display: 'flex',
        msFlexPack: 'center',
        justifyContent: 'center',
        msFlexAlign: 'center',
        alignItems: 'center',
        // fontFamily: 'Poppins', sans - serif,
        // background: url("../images/Search_001.png"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '15px',
    },
    s01Form: {
        width: '100%',
        maxWidth: '1290px',
    },
    legend: {
        fontSize: '72px',
        lineHeight: 1,
        color: '#fff',
        marginBottom: '60px',
    },
    innerForm: {
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '50px 47px',
        // display: '-ms-flexbox',
        display: 'flex',
        width: '100%',
        msFlexPack: 'justify',
        justifyContent: 'space-between',
        msFlexAlign: 'center',
        alignItems: 'center',
    },
    inputField: {
        marginRight: '30px',
        height: '68px',
    },
    firstWrap: {
        msFlexPositive: 1,
        flexGrow: 1,
        width: '100%',
        marginBottom: '20px',
    },
    input : {
        width: '90%',
    },
    thirdWrap: {
        // width: 'calc(50% - 10px)',
        marginBottom: '3%'
    },
    btnSearch: {
        fontSize: '16px',
        height: '100%',
        width: '100%',
        background: '#4272d7',
        whiteSpace: 'nowrap',
        borderRadius: '5px',
        fontSize: '20px',
        color: '#fff',
        // transition: 'all .2s ease-out, color .2s ease-out',
        border: '0',
        cursor: 'pointer',
    },
    'btnSearch:hover' : {
        background: '#2d62d3'
    }
});

export default styles;