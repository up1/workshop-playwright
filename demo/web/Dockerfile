FROM python:alpine
WORKDIR /src
# Install itsdangerous for secure client-side sessions:
RUN pip3 install itsdangerous && rm -rf /root/.cache
# Disable buffering to view logs via docker:
ENV PYTHONUNBUFFERED=1
COPY . .
CMD ["python", "server.py"]