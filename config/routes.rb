Rails.application.routes.draw do
  root 'op_codes#index'
  resources :op_codes do
    collection do
      post 'new'
      get 'index'
      get 'show'
    end
  end
end
