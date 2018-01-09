Rails.application.routes.draw do
  root to: 'spa#index'

  get '/:spa_route' => 'spa#spa_route'
end
