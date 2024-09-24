import React from 'react'
import scanqr from '../../assets/scanqr.png'
import scanqr1 from '../../assets/scanqr1.png'
import group from '../../assets/Group 48.png'
import group1 from '../../assets/Group 49.png'

const ScanMe = () => {
    return (
        <div className='flex items-center h-[300px]'>
            <div className='w-1/3 h-[380px]'>
                <img src={scanqr} className='' alt="Scan QR" />
            </div>
            <div className='w-1/3' >

                <span class="material-symbols-outlined">
                    qr_code_scanner
                </span>
                <p>Please scan the QR code and get more about us.</p>
            </div>
            <div className='w-1/3 h-[380px]'>
                <img src={scanqr1} className='' alt="Scan QR 1" />
            </div>
        </div>
    )
}

export default ScanMe
