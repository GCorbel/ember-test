def login
  token = 123
  admin_user = create(:admin_user, access_token: token)
  allow_any_instance_of(ApplicationController).to receive(:token_authenticate)
    .and_return(admin_user)
end
