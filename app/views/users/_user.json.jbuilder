json.extract! user, :id, :first_name, :last_name, :major, :email, :grad_year, :faculty, :intro, :available, :created_at, :updated_at
json.url user_url(user, format: :json)
