Rails.application.routes.draw do
  root to: 'spa#index'

  get '/:spa_route' => 'spa#spa_route'

  # TODO: put in admin namespace and restrict access
  #client-Admin
  get '/clients' => 'client#list'
  delete '/client/:id' => 'client#destroy'

  #client
  post '/client' => 'client#new'
end
