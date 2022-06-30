import React, { useState } from "react";
import "bootstrap";


const LoginModel = () => {


	return (
		<div className="modal fade" id="loginModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Welcome back!</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form >
							<div className="row mb-3">
								<label htmlFor="inputEmail" className="col-sm-2 col-form-label">
									Email:
								</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="inputEmail" />
								</div>
							</div>
							<div className="row mb-3">
								<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
									Password:
								</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="inputPassword" />
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Cancel
						</button>
						<button type="button" className="btn btn-primary">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginModel;
