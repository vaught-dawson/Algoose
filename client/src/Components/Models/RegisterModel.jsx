import React from "react";
import "bootstrap";

const RegisterModel = () => {
	return (
		<div className="modal fade" id="registerModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Welcome! Register your account:</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form>
							<div className="row mb-3">
								<label htmlFor="userName" className="col-sm-4 col-form-label">
									Username:
								</label>
								<div className="col-sm-8">
									<input type="email" className="form-control" id="userName" />
								</div>
							</div>
							<div className="row mb-3">
								<label htmlFor="email" className="col-sm-4 col-form-label">
									Email:
								</label>
								<div className="col-sm-8">
									<input type="email" className="form-control" id="email" />
								</div>
							</div>
							<div className="row mb-3">
								<label htmlFor="password" className="col-sm-4 col-form-label">
									Password:
								</label>
								<div className="col-sm-8">
									<input type="email" className="form-control" id="password" />
								</div>
							</div>
							<div className="row mb-3">
								<label htmlFor="conPassword" className="col-sm-4 col-form-label">
									Confirm Password:
								</label>
								<div className="col-sm-8">
									<input type="email" className="form-control" id="conPassword" />
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Cancel
						</button>
						<button type="button" className="btn btn-primary">
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterModel;
