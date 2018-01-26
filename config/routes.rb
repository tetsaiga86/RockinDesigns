Rails.application.routes.draw do
  root to: 'spa#index'


  # TODO: put in admin namespace and restrict access
  #client-Admin
  get '/clients' => 'client#list'
  delete '/client/:id' => 'client#destroy'

  #get github data from db
  get '/github' => 'github#show'

  #post new client in db
  post '/client' => 'client#new'

  get '/:spa_route' => 'spa#spa_route'
end
