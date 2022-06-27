import React from 'react'

const RegisterModel = () => {
  return (
    <div class="modal fade" id="registerModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Welcome! Register your account:</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row mb-3">
                        <label for="userName" class="col-sm-4 col-form-label">Username:</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="userName"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="col-sm-4 col-form-label">Email:</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="email"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="col-sm-4 col-form-label">Password:</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="password"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="conPassword" class="col-sm-4 col-form-label">Confirm Password:</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="conPassword"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button type="button" class="btn btn-primary">
                    Register
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default RegisterModel