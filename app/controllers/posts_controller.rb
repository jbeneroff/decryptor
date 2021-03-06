class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: %i[cryptocurrency user comments], status: :ok
  end

  # GET /posts/1
  def show
    render json: @post, include: %i[cryptocurrency user comments], status: :ok
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    @cryptocurrency = Cryptocurrency.find(params[:cryptocurrency_id])
    @post.cryptocurrency = @cryptocurrency
    @cryptocurrency.posts << @post
    if @post.save
      render json: @post, include: %i[cryptocurrency user comments], status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: %i[cryptocurrency user comments]
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:content, :user_id, :cryptocurrency_id)
  end
end
