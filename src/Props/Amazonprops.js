function Amazonprops(props){
    return(
        <div className='col-lg-3'>
            <div className='deptProductBody'>
                <div className='product_heading'>{props.webname}</div>                            
                <div className='dept_imagebox'>
                    <img src={props.webimgsrc} alt='' />
                </div>                            
            </div>                    
        </div>
    )
}
export default Amazonprops;