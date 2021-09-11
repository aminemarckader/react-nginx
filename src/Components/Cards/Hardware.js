import React,{Fragment} from 'react'
import { FaLaptop, FaTabletAlt } from 'react-icons/fa';
import { GoDeviceDesktop } from "react-icons/go";
const Hardware = ({data}) => {
    return (
		<Fragment>
			<div className="col-12 col-sm-6 col-lg-3 mb-3">
				<div className="card info">
					<div className="card-body d-flex align-items-center p-0">
						<div className="mr-3 text-white bg-info p-4">
							{
								data.deviceType !== "Laptop"?
								(
									data.deviceType === "iPad"?
									(
										<FaTabletAlt size={34}/>
									):
									(
										<GoDeviceDesktop size={34}/>
									)
								):
								(
									<FaLaptop size={34}/>
								)
							}
						</div>
						<div>
							<div className="text-value text-info"> {data.networkName}</div>
							<div className="text-muted text-uppercase font-weight-bold small">
								income
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Hardware
