Rails.application.routes.draw do
  devise_for :users
  get 'static/index'

  get 'static/about'

  get 'static/faq'

  get 'static/legal'

  get 'static/contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static#index"
end