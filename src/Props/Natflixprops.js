function Natflx (props){
    return(
        <div className='col-lg-3'>
            <div className='deptProductBody'>
                <div className='product_heading'>{props.name}</div>                            
                <div className='dept_imagebox'>
                    <img src={props.imgsrc} alt='' />
                </div>                            
            </div>                    
        </div>
    )
}
export default Natflx;