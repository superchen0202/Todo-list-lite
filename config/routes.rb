Rails.application.routes.draw do
  

  devise_for :users

  resources :cards do
    member do
      put :move
    end
 
  end
  
  # /lists/2/move
  resources :lists do 
    member do
      put :move
    end
  
  end

  root 'lists#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end